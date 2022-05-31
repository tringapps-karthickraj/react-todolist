import { createSlice } from '@reduxjs/toolkit'

export const todolist = createSlice({
  
  name: 'todolist',
  initialState: {
   list: localStorage['toDoList'] ?  JSON.parse(localStorage['toDoList']).toDoListArr : [],
   editProfileData:{
     profile:{},
     index:-1
   }
  },
  reducers: {
    insertList: (state,action) => {
      let json={
        toDoListArr:[]
      };
      if(localStorage['toDoList'] === undefined){
        localStorage['toDoList'] = JSON.stringify(json);
        console.log(localStorage['toDoList']);
      }
      let payloadobj={
        task:action.payload,
        completed:false,
        isEdit:false
      }
      json.toDoListArr = JSON.parse(localStorage['toDoList']).toDoListArr
       json.toDoListArr.push(payloadobj)
       localStorage['toDoList'] = JSON.stringify(json);
        return {
          ...state,
          list: [...state.list,payloadobj] 
         
        }
     },
     updateList: (state,action)=>{
        const idx = action.payload.index;
        const copyArr = [...state.list];
        const payload = action.payload.list
        copyArr[idx] = payload;
        let json={
          toDoListArr:[]
        };
        json.toDoListArr = JSON.parse(localStorage['toDoList']).toDoListArr
        json.toDoListArr[idx] = action.payload.list;
        localStorage['toDoList'] = JSON.stringify(json);
       return{
         ...state, 
        list: copyArr
      }
        
      },
     deleteList:(state,action)=>{
       let localStr = JSON.parse(localStorage['toDoList']).toDoListArr;
       localStr.splice(action.payload,1);
       let json={
        toDoListArr:localStr
       }
       console.log(json);
       localStorage['toDoList'] = JSON.stringify(json);

      return {
        ...state,
        list: [...state.list.slice(0, action.payload),
          ...state.list.slice(action.payload + 1)] 
       
      }
     },
    //  editProfile:(state,action)=>{
    //     state.editProfileData = action.payload;
    //  }
  },
})

export const { insertList,deleteList,updateList} = todolist.actions
export default todolist.reducer