import React, { useEffect, useState } from "react";
import styles from "./FetchData.module.css";

export default function FetchData({ url }) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!url) return;
		const controller = new AbortController();
		const signal = controller.signal;
		setLoading(true);
		setError(null);

		fetch(url, { signal })
			.then((res) => {
				if (!res.ok) throw new Error(`HTTP ${res.status}`);
				return res.json();
			})
			.then((json) => setData(json))
			.catch((err) => {
				if (err.name !== "AbortError") setError(err.message || "Unknown error");
			})
			.finally(() => setLoading(false));

		return () => controller.abort();
	}, [url]);

	if (!url) return <div className={styles.fetchdata}>No URL provided</div>;

	return (
		<div className={styles.fetchdata}>
			{loading && <div className={styles['fd-loading']}>Loading...</div>}
			{error && <div className={styles['fd-error']}>Error: {error}</div>}
			{!loading && !error && data && (
				<div className={styles['fd-list']}>
					{Array.isArray(data) ? (
						data.map((item) => (
							<div
								className={styles['fd-item']}
								key={item.id || item.title || JSON.stringify(item)}
							>
								<pre className={styles['fd-pre']}>{JSON.stringify(item, null, 2)}</pre>
							</div>
						))
					) : (
						<pre className={styles['fd-pre']}>{JSON.stringify(data, null, 2)}</pre>
					)}
				</div>
			)}
		</div>
	);
}

