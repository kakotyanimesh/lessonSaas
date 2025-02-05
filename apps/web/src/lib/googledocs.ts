import { google } from "googleapis"



    // interface DocsTypes {
    //     title : string,
    //     content : string,
    //     accessToken : string
    // }


export const createDocs = async (fileName : string, content : string, accessToken : string) => {
    const auth = new google.auth.OAuth2
    auth.setCredentials({access_token : accessToken})


    const docs = google.docs({version : "v1", auth})

    const res = await docs.documents.create({requestBody : {title : fileName}})

    const googleDocsId = res.data.documentId

    if(!googleDocsId){
        return
    }

    await docs.documents.batchUpdate({
        documentId : googleDocsId,
        requestBody : {requests : [{ insertText : {location : {index : 1} , text : content}}]}
    })


    return googleDocsId

}