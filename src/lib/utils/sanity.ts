import {createClient, type ClientConfig} from "@sanity/client";

const config : ClientConfig = {
    projectId: 'b28uelxo',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2025-05-27'
}

const sanityClient = createClient(config);
export default sanityClient;