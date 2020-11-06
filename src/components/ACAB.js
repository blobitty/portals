import React, { useState} from 'react'
import {ReactComponent as ACABImg} from './ACAB.svg';



export default class ACAB extends React.Component{
    constructor(props){
        super(props);
        //creates reference HTML DOC element
        this.svgClassRef = React.createRef();

    }
    componentDidMount(){
        
        //get group element size in svg
        let imageNodeSize = this.svgClassRef.current.childNodes.length

         //itterate over the image node (i.e. svg) and stop at the last group element
        for(let i = 0; i < imageNodeSize; i++){
            //current group element node
            const svgNode = this.svgClassRef.current.childNodes[i]
            console.log(svgNode)
           // svgNode.style.fill= this.props.fillColors[i]
            svgNode.addEventListener("click", function(){
               
                console.log(svgNode)
            })

        }
    }

    render(){
        return(  
        
        <ACABImg ref={this.svgClassRef} />
            )
    }
    
    
}


        
    

