import React, {useState}from 'react'

export default function About(props) {



    // let myStyle={
    //     color: 'white',
    //     backgroundColor: 'black'
    // }

   





    //**********since the "Enable Dark Mode" button has been removed so we can remove these functions now
    //now trying to make the myState variable-->a state variable to enable the dark mode thing 
    // const [myStyle, setMyStyle]=useState({
    //     color: 'black',
    //     backgroundColor: 'white',
        
    // })

    //learning how to use multiple states as well
    // const[btntext, setBtnText]=useState("Enable Dark Mode")

    // const toggleStyle=()=>{
    //    if(myStyle.color=='white'){
    //             setMyStyle({
    //                 color: 'black',
    //                 backgroundColor: 'white'
    //             })
    //             setBtnText("Enable Dark Mode");
    //    }
    //    else{
    //             setMyStyle({
    //                 color: 'white',
    //                 backgroundColor: 'black',
    //                 border: '1px solid white'
    //             })
    //             setBtnText("Enable Light Mode");
    //        }
    // }
      // myStyle is a javascript object here 




  let myStyle = {
    color: props.mode ==='dark'?'white':'#042743',
    backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
    // border: '2px solid', 
    // borderColor: props.mode==='dark'?'white':'#042743'
   }
  
  return (
    <div className="container" style={myStyle}>
        <h1 className="my-2" style={{color: props.mode ==='dark'?'white':'#042743'}}>About Us</h1>
                <div className="accordion" id="accordionExample">
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze your text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or bla bla.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to Use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                TextUtils is a free character counting tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus, it is suitable for writing text with word/ character limit.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                {/* <code>.accordion-body</code> */}
                    This word counter software works in any browser such as Chrome, Firefix, Internet Explorer, Safari, Opera. It suits to count charactersvin facebook, blog, books, excel document, pdf document, essays, etc.
                </div>
                </div>
            </div>
            </div>
            {/* <div className="container my-3">
            <button onClick={toggleStyle}type="button" class="btn btn-primary">{btntext}</button>
            </div> */}
    </div>
  )
}
