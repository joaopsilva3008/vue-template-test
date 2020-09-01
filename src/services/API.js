import { instance } from './config'

export default{

    getTeams: (teamID)=> {
        return instance.get('/Admin/GetAllTeams'
                        , {
                            params: {
                                id: teamID
                           }
                })
    } 
}