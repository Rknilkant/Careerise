import profileListItemModel from "../models/ProfileListItem";

/*
 * Gets all the users form the ProfileListing Collection from mongoDB
 * @returns All profile lists | Error
 */
export function getAllProfiles() {
	profileListItemModel
		.find()
		.then((value) => {
			console.log("Value", value); // for debugging
			return value;
		})
		.catch((error) => {
			console.log("Error: ", error); // for debugging
			return error;
		});
}

/*
 * Filter profiles and gives back the filtered profiles back
 * @returns Profiles matching the filtered category
 */
export function filterProfiles(filterCondition: JSON) {
	/*
	 * Define the filter function here
	 */
	console.log("filterProfiles function executed");
}

/*
 * Pushes profiles to the profilesList Collection to the mongoDB
 */
export function pushProfile(profileData) {
	/*
	 * Define the pushProfile function
	 */
	console.log("pushProfile function executed");
}
