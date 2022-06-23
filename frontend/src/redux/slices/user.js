import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:"user",
    initialState:{
        firstname:"",
        lastname:"",
        bio:"",
        password:"",
        number:"",
        sexe:"",
        email:"",
        friends:[],
        pictures:[],
        confirm:[],
        invit:[],
        conversations:[],
        groups:[],
        groupsInvit:[],
        online:"",  
    },
    reducers:{
        firstnameChanged : (state,values)=>{
            state.firstname = values.payload
        },
        lastnameChanged:(state,values)=>{
            state.lastname = values.payload
        },
        bioChanged:(state,values)=>{
            state.bio = values.payload
        },
        passwordChanged:(state,values)=>{
            state.password = values.payload
        },
        numberChanged:(state,values)=>{
            state.number = values.payload
        },
        sexeChanged:(state,values)=>{
            state.sexe = values.payload
        },
        emailChanged:(state,values)=>{
            state.email = values.payload
        },
        picturesChanged : (state,values)=>{
            let tableau = []
            tableau = state.pictures
            tableau.push(values.payload)
            state.pictures = tableau
        },
        friendsChanged : (state,values)=>{
            let tableau = []
            tableau = state.friends
            tableau.push(values.payload)
            state.friends = tableau
        },
        confirmChanged : (state,values)=>{
            let tableau = []
            tableau = state.confirm
            tableau.push(values.payload)
            state.confirm = tableau
        },
        invitChanged : (state,values)=>{
            let tableau = []
            tableau = state.invit
            tableau.push(values.payload)
            state.invit = tableau
        },
        conversationsChanged : (state,values)=>{
            let tableau = []
            tableau = state.conversations
            tableau.push(values.payload)
            state.conversations = tableau
        },
        groupsChanged : (state,values)=>{
            let tableau = []
            tableau = state.groups
            tableau.push(values.payload)
            state.groups = tableau
        },
        groupsInvitChanged : (state,values)=>{
            let tableau = []
            tableau = state.groupsInvit
            tableau.push(values.payload)
            state.groupsInvit = tableau
        },
        onlineChanged : (state,values)=>{
           state.online = values.payload
        },
    }
})
export const {firstnameChanged,lastnameChanged,bioChanged,passwordChanged,numberChanged,sexeChanged,emailChanged,picturesChanged,friendsChanged,confirmChanged,invitChanged,conversationsChanged,groupsChanged,groupsInvitChanged,onlineChanged} = userSlice.actions

export default userSlice.reducer