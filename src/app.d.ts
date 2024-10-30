// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user : {
				username : string;
				email : string;
				name : string;
				avatar : string;
				collectionId : string;
				id : string;
				role : string;
			}
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
