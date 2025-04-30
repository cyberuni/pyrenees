export const ctx = {
	matchMedia(query: string) {
		return globalThis.matchMedia(query)
	},
	getDocumentElement() {
		return globalThis.document.documentElement
	}
}
