export function delayLoad(promise : any) {
    return new Promise(resolve => {
      setTimeout(resolve, 0);
    }).then(() => promise);
  }



export const formatId = (id: string) => {
        return id.trim()
                .replace("-","")
                .replace(" ","")
                .replace(" ","")
                .replace(" ","")
                .replace(" ","")
                .replace(" ","")
                .replace(" ","")
                .replace(" ","")
                .replace(" ","")
                .replace(" ","")
                .replace(" ","")
                .replace("&","")
                .replace(".","")
                .replace("/","")
                .replace("'","")
                .replace(":","")
}
 