export async function fetchPosts(PROJECT_ID: string, DATASET: string) {
	const response = await fetch(
		`https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${encodeURIComponent(
			'*[_type == "post"]'
		)}`
	);
	return response.json().then((json) => json.result);
}

export async function fetchPostBySlug(
	PROJECT_ID: string,
	DATASET: string,
	slug: string
) {
	const response = await fetch(
		`https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${encodeURIComponent(
			`*[slug == "${slug}"]`
		)}`
	);
	return response.json().then((json) => json.result[0]);
}
