const form = document.getElementById('form')
const input = document.getElementById('input')
const  todosItem= document.getElementById('todos-container')
const submitBtn = document.getElementById('submit-btn')

// functions 


const validation =()=>{
    if(input.value===''){
        let msg = document.createElement('h3')
        msg.innerHTML='Please Enter A Value/Text'
         msg.classList.add('error-msg')
        form.appendChild(msg)
    }else{
        if(document.querySelector('.error-msg')){
            document.querySelector('.error-msg').remove()
        }
        acceptData()
    }
}

const acceptData=()=>{
    data.item= input.value
    data.id = (Math.floor(new Date().getTime())).toString()
    injectToDOM()

}

const injectToDOM=( )=>{
    let year= new Date().getFullYear().toString()
    let month= new Date().getMonth().toString()
    let day= new Date().getDay().toString()
    console.log(year, month, day)

todosItem.innerHTML +=
` 
<p class="todos-item">
<span class="date">${year},${month},${day}</span>
${data.item}
<span>
<i onClick="editPost(this)"  class="fas fa-edit edit"  ></i>
<i onClick="deletePost(this)" class="fas fa-trash-alt delete"  ></i>
</span>
</p>
`
input.value = ''
}

const deletePost =(e) =>{
    e.parentElement.parentElement.remove()
}

const editPost= (e)=>{
    input.value =   e.parentElement.parentElement.innerText
    e.parentElement.parentElement.remove();
 
}


//initaling starter object

const  data={
    item:null,
    id:null,
}

// events
 
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    validation()
})
 