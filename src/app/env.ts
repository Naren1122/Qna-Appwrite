const env = {
  appwrite: {
    endpoint: String(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT),
    projectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
    apikey: String(process.env.APPWRITE_API_KEY),
  },
};
export default env;

//here we have just created a env object to store all the environment variables related to appwrite and then we are exporting it so that we can use it in other parts of our application.
