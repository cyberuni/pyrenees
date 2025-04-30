const knownPrefixes = [
	'tw[\\w]*:',
	'pds:',
	'spf-nav:',
	'spf:',
	'cm:',
	'msp-twds:',
	'cc:',
	'epm:',
	'pats:',
	'ztna:',
	'ao:',
	'asc:',
	'naa:',
	'uda:',
	'iot:',
]
const regex = new RegExp(`^-?(${knownPrefixes.join('|')})?(.*)`)

export function trimPrefix(className: string) {
	const match = className.match(regex)
	if (match) {
		return match[2]
	}
}
