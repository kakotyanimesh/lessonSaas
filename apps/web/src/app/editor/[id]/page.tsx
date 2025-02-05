import { Editor } from "../../components/editor"

export default async function EditorPage({params} : {
    params : {
        id : string
    }
}){
    const docsId = (await params).id
    return (
        <div>
            <Editor docsId={docsId}/>
        </div>
    )
}