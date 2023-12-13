export type Navprop = {items:Item[],y:number}

export type Item = {id:number, spot:string, fill:string}

export type AboutData = {about:Abouts[]}

export type Abouts = {id:number, title:string, detail:Detail[] , color:string}

export type Detail = {id:number, list:string}
