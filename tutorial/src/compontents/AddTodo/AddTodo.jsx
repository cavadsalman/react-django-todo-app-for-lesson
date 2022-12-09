import "./AddTodo.css";
import React from "react";
import axios from "axios";

function AddTodo(props) {
   const [title, setTitle] = React.useState("");
   const [content, setContent] = React.useState("");

   const titleInputRef = React.useRef(null)

   const titleChangeHandler = (e) => {
      setTitle(e.target.value);
   };

   const contentChangeHandler = (e) => {
      setContent(e.target.value);
   };

   React.useEffect(() => {
        console.log('adi callback')
        return () => {
            console.log('return olunan call back')
        }
   }, [title])



   React.useEffect(() => {
    titleInputRef.current.focus()
   }, [])

   

   const submitHandler = () => {
      const newTodo = {
         title: title,
         content: content,
      };

      axios
         .post("http://127.0.0.1:8000/api/todo/todo-list/", newTodo)
         .then((response) => {
            props.addTodoHandler(response.data);
            setTitle("");
            setContent("");
         })
         .catch((error) => {
            alert("Xeta bas verdi");
         });
   };

   const pressHandler = (e) => {
        if (e.key == 'Enter') {
            if (title && content)
                submitHandler()
            else
                alert('Bos buraxmaq olmaz')
            
        }
    };

   return (
      <div className="add-todo">
         <input
            value={title}
            onChange={titleChangeHandler}
            className="title-input"
            type="text"
            placeholder="Basliq"
            onKeyDown={pressHandler}
            ref={titleInputRef}
         />
         <input
            value={content}
            onChange={contentChangeHandler}
            className="content-input"
            type="text"
            placeholder="Aciqlama"
            onKeyDown={pressHandler}
         />
         <button onClick={submitHandler}>Add</button>
      </div>
   );
}

export default AddTodo;
