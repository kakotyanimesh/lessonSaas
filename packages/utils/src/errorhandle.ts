export const errorhandle = (error : any) => {
    // @ts-ignore
    if(error instanceof Error && error.code === "P2002"){
        return { msg : 'user already exits', status : 400}
    }
    
    return {msg : `something went wrong while creating user ${error}`, status : 500}
}