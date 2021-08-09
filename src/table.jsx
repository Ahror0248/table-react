import React, { Component } from 'react'
import './table.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faUpload } from '@fortawesome/free-solid-svg-icons'
 class Table extends Component {
    render() {
        const data = [

          
            {
                sites:'Google',
                Viewes:'9518',
                Clicks:'6369',
                Average:'01:032:50',
            },
            {
                sites:'Twitter',
                Viewes:'7326',
                Clicks:'10437',
                Average:'00:51:22',
            },
            {
                sites:'Amazon',
                Viewes:'4162',
                Clicks:'5327',
                Average:'00:24:34',
            },
            {
                sites:'Linkedin',
                Viewes:'3654',
                Clicks:'2961',
                Average:'00:12:10',
            },
        ]
        const remove = (v,index) =>{
        //  document.getElementsByClassName('rem')[index].innerHTML="";
         document.getElementById("td1"+index).innerHTML='';
         document.getElementById("td2"+index).innerHTML='';
         document.getElementById("td3"+index).innerHTML='';
         document.getElementById("td4"+index).innerHTML='';
        }

        const reset = (v,index) =>{
            //  document.getElementsByClassName('rem')[index].innerHTML="";

             document.getElementById("td1"+index).innerHTML=data[index].sites;
             document.getElementById("td2"+index).innerHTML=data[index].Viewes;
             document.getElementById("td3"+index).innerHTML=data[index].Clicks;
             document.getElementById("td4"+index).innerHTML=data[index].Average;
            }
        return (
            <div>
                <div>
                   <table>
                   <tr >
                        <th>Sites</th>
                        <th>Views</th>
                        <th>Clicks</th>
                        <th>Average</th>
                    </tr>
                  {
                      data.map((v,index) =>
                        <tr className="rem">
                        <td id={"td1"+index}>{v.sites}</td>
                        <td id={"td2"+index}>{v.Clicks}</td>
                        <td id={"td3"+index}>{v.Viewes}</td>
                        <td id={"td4"+index}>{v.Average}</td>                      
                        <td><button
                              onClick={() =>{remove(v,index)}} className="delete" style={{width: '45%', height:'35px' }}>
                              <FontAwesomeIcon icon={faTrash}/>
                            </button>
                        </td>
                        <td><button
                              onClick={() =>{reset(v,index)}} className="delete" style={{width: '45%', height:'35px' }}>
                              <FontAwesomeIcon icon={faUpload}/>
                            </button>
                        </td>
                        </tr>
                  )
                  }
                
                   </table>
                </div>
            </div>
        )
    }
}

export default Table