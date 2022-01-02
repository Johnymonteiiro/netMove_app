
export interface Types {
  id:number
  name:string
}

export interface MoveTypes {
    id: number,
    title: string,
    poster_path:string,
    vote_average: number,
    original_title:string,
    backdrop_path:string,
    overview:string
  }

  export interface InfoTypes {
    id: number,
    title: string,
    poster_path:string,
    vote_average: number,
    original_title:string,
    backdrop_path:string,
    overview:string,
    runtime:number,
    release_date:string,
    production_countries:Types[],
    spoken_languages: Types[],
    genres:Types[]
  }
  

  export interface TvTypes {
    id: number,
    name: string,
    poster_path:string,
    vote_average: number,
    original_name:string,
    backdrop_path:string,
    overview:string,
  }

  export interface ShowInfoTypes {

    id: number,
    name: string,
    original_name:string,
    backdrop_path:string,
    overview:string,
    poster_path:string,
    season_number: number,
    number_of_episodes:number,
    production_countries:Types[],
    spoken_languages: Types[],
    vote_average: number,
    genres:Types[]

  }
