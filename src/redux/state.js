let store = {
    _callSubscriber  ()  {
    },
    getState() {
        return this._state
    },
     _state: {
        profilePage: {
            posts: [
                {id: 1, post: "Hi, I are you?", likeCount: "16"},
                {id: 2, post: "It`s my first post.", likeCount: "11"},
                {id: 3, post: "It`s very well.", likeCount: "21"},
                {id: 4, post: "Super.", likeCount: "6"},
            ],
            newPostChange: " Hi, hi my freinds"
        },
        dialogPage: {
            messangers: [
                {id: 1, messanger: "Hi"},
                {id: 2, messanger: "How are you?"},
                {id: 3, messanger: "I fun"},
            ],
            dialogs: [
                {id: 1, name: "Sasha"},
                {id: 2, name: "Anna"},
                {id: 3, name: "Vetal"},
                {id: 4, name: "Lyda"},
                {id: 5, name: "Petro"},
                {id: 6, name: "Viktor"},
            ],
            newDialogText: "Hello? hello"
        },
        siteBar: {}
    },

    /*addPost()  {
        let newPost = {
            id: 5,
            post: this._state.profilePage.newPostChange,
            likeCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostChange = "";
        this._callSubscriber(this._state);
    },
     addMessanger()   {
        let newMassenger = {
            id: 4,
            messanger: this._state.dialogPage.newDialogText,
        }
         this._state.dialogPage.messangers.push(newMassenger);
         this._state.dialogPage.newDialogText = "";
         this._callSubscriber(this._state);
    },
     updeateNewPostText  (newText)  {
         this._state.profilePage.newPostChange = newText;
         this._callSubscriber(this._state);
    },
     updeateNewMessangerText  (newMassenger)  {
         this._state.dialogPage.newDialogText = newMassenger;
         this._callSubscriber(this._state);
    },*/
     subscribe  (observer)  {
         this._callSubscriber = observer;
    },
    dispatch(action) {
        if(action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                post: this._state.profilePage.newPostChange,
                likeCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostChange = "";
            this._callSubscriber(this._state);
        } else if(action.type === 'UPDEATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostChange = action.newText;
            this._callSubscriber(this._state);
        } else if(action.type === 'ADD-MESSANGER'){
            let newMassenger = {
                id: 4,
                messanger: this._state.dialogPage.newDialogText,
            }
            this._state.dialogPage.messangers.push(newMassenger);
            this._state.dialogPage.newDialogText = "";
            this._callSubscriber(this._state);
        }else if (action.type === 'UPDEATE-NEW-MASSENGER-TEXT'){
            this._state.dialogPage.newDialogText = action.newMassenger;
            this._callSubscriber(this._state);
        }
    }
}

window.store = store;
export default store;