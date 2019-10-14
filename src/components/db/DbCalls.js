const db = "gs://photosite-csandlin.appspot.com/";

const API = {


    getLandingPhotos: () => {
        return fetch(`{db}`)

    }
};