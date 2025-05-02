function s(t){return function(e,...a){if(!a.every(i))throw new Error(`tailwind does not support dynamic expression.
Please make sure each argument is evaluated to a valid tailwind class name`);return t(r(e,a))}}function r(t,n){return t.flatMap((e,a)=>[...e.split(" "),n[a]||""]).map(e=>`${e}`.trim())}function i(t){return typeof t=="string"||!t}export{s as b};
