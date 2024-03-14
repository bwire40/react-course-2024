function customRender(reactElement,container){
   const domElement= document.createElement(reactElement.type)
   domElement.innerHTML=reactElement.children
   //    domElement.setAttribute('taret',reactElement.props.target)
   
   
   for (const prop in reactElement.props) {
       if(prop==='children') continue
       domElement.setAttribute(prop,reactElement.props[prop])
    }
       container.appendChild(domElement)


}


const reactElement={
    type:'a',
    props:{
        href:"https://google.com",
        target:'_blank'
    },
    children:'Click me to visit Google'
}

// main container
const el=document.getElementById('root');

// inject
customRender(reactElement,el)