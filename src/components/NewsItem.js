import React, { useEffect, useState } from 'react';
import {Modal,Button} from 'react-bootstrap';

function NewsItem(props) {
  const [result,setResult] = useState([]);

  //For modal
  const [language,setLanguage] = useState();
  const handleRadio = (e)=>{
    const target = e.target;
    if(target.checked)
    {
      setLanguage(target.value);
    }
    
  }

  const [isShow,invokeModal] = useState(false);
  const [isShow2,invokeModal2] = useState(false);
  const [isShow3,invokeModal3] = useState(false);
  const initModal = (val)=>{
    return invokeModal(!val);
  }
  const initModal2 = (val)=>{
    return invokeModal2(!val);
  }

  const initModal3 = (val)=>{
    return invokeModal3(!val);
  }

   
  //************************************************************************************************ */
  
  const url =  "https://newsapi.org/v2/everything?q=tesla&from=2023-02-02&sortBy=publishedAt&apiKey=2ab9a56d58df42408d016049d3de183e"
  const fetchData = async()=>{
     const data = await fetch(url);
     const parseData = await data.json();
     setResult(parseData.articles);
  }

  useEffect(()=>{
     fetchData();
  },[]);
    
  return (
    <>
    <div className='container my-3'>

  {/* Modal */}
    <Button className='my-2' variant="success" onClick={()=>initModal(false)}>
        Languages
      </Button>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>Choose Language</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="language" value="Hindi" checked={language === "Hindi"} onChange={handleRadio} id="flexRadioDefault1"/>
          <label class="form-check-label" for="flexRadioDefault1">
            Hindi
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="language" value="English" checked={language === "English"} onChange={handleRadio} id="flexRadioDefault1"/>
          <label class="form-check-label" for="flexRadioDefault1">
            English
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="language" value="Marathi" checked={language === "Marathi"} onChange={handleRadio} id="flexRadioDefault1"/>
          <label class="form-check-label" for="flexRadioDefault1">
            Marathi
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="language" checked={language === "Tamil"} onChange={handleRadio} id="flexRadioDefault1"/>
          <label class="form-check-label" for="flexRadioDefault1">
            Tamil
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="language" checked={language === "Telugu"} onChange={handleRadio} id="flexRadioDefault1"/>
          <label class="form-check-label" for="flexRadioDefault1">
            Telugu
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="language" checked={language === "Malyalam"} onChange={handleRadio} id="flexRadioDefault1"/>
          <label class="form-check-label" for="flexRadioDefault1">
            Malyalam
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="language" checked={language === "Japanise"} onChange={handleRadio} id="flexRadioDefault1"/>
          <label class="form-check-label" for="flexRadioDefault1">
            Japanise
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="language" checked={language === "Russian"} onChange={handleRadio} id="flexRadioDefault1"/>
          <label class="form-check-label" for="flexRadioDefault1">
            Russian
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="language" checked={language === "Spanish"} onChange={handleRadio} id="flexRadioDefault1"/>
          <label class="form-check-label" for="flexRadioDefault1">
          Spanish
          </label>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={()=>initModal(true)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <br></br>

      <Button className='my-2' variant="success" onClick={()=>initModal2(false)}>
        Country
      </Button>
      <Modal show={isShow2}>
        <Modal.Header closeButton onClick={initModal2}>
          <Modal.Title>Choose Country</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={()=>initModal2(true)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

<br></br>

      <Button className='my-2' variant="success" onClick={()=>initModal3(false)}>
        Topics
      </Button>
      <Modal show={isShow3}>
        <Modal.Header closeButton onClick={initModal3}>
          <Modal.Title>Choose Topic</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={()=>initModal3(true)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
{/* ************************************************************************************************* */}


      <h2 style={{color:"white"}}><center>NewsVihar - {language}</center></h2>
      <div className='row'>
      {
         result.map((elem)=>{
           return <div key={elem.url} className="col-md-4 my-4 card" style={{width: "18rem"}}>
           <img src={!elem.urlToImage ? "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg" : elem.urlToImage} className="card-img-top" alt="/"/>
           <div className="card-body">
             <h5 className="card-title">{elem.title ? elem.title.slice(0,40):""}....</h5>
             <p className="card-text">{elem.description ? elem.description.slice(0,80):""}....</p>
             <a href={elem.url} className="btn btn-primary">Read More</a>
           </div>
         </div>
             
        })
      }
</div>
</div>
    </>
  )
}

export default NewsItem
