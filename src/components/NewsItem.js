import {Modal,Button} from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

function NewsItem() {
  const [topic,setTopic] = useState();
  const [country,setCountry] = useState();
  const [language,setLanguage] = useState();
  const url =  `https://gnews.io/api/v4/search?q=${topic}&lang=${language}&country=${country}&max=20&apikey=80a45a87be7a99aee8a1f9417d71dc7c`
  
  const [result,setResult] = useState([]);
 

  const fetchData = async()=>{
    const data = await fetch(url);
    const parseData = await data.json();
    setResult(parseData.articles);
 }

 const saveValues = ()=>{
   fetchData();
 }

  //For modal
  const handleRadio = (e)=>{
    const target = e.target;
    if(target.checked)
    {
      setLanguage(target.value);
    }
  }

  const handleRadioCoun = (e)=>{
    const target = e.target;
    if(target.checked)
    {
      setCountry(target.value);
    }
    
  }

  const handleRadioTopic = (e)=>{
    const target = e.target;
    if(target.checked)
    {
      setTopic(target.value);
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
          <input class="form-check-input" type="radio" name="language" value="hi" checked={language === "hi"} onChange={handleRadio} id="flexRadioDefault1"/>
          <label class="form-check-label" for="flexRadioDefault1">
            Hindi
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="language" value="en" checked={language === "en"} onChange={handleRadio} id="flexRadioDefault1"/>
          <label class="form-check-label" for="flexRadioDefault1">
            English
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="language" value="mr" checked={language === "mr"} onChange={handleRadio} id="flexRadioDefault1"/>
          <label class="form-check-label" for="flexRadioDefault1">
            Marathi
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="language" value="ta" checked={language === "ta"} onChange={handleRadio} id="flexRadioDefault1"/>
          <label class="form-check-label" for="flexRadioDefault1">
            Tamil
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="language" value="te" checked={language === "te"} onChange={handleRadio} id="flexRadioDefault1"/>
          <label class="form-check-label" for="flexRadioDefault1">
            Telugu
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="language" value="ml" checked={language === "ml"} onChange={handleRadio} id="flexRadioDefault1"/>
          <label class="form-check-label" for="flexRadioDefault1">
            Malyalam
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="language" value="ja" checked={language === "ja"} onChange={handleRadio} id="flexRadioDefault1"/>
          <label class="form-check-label" for="flexRadioDefault1">
            Japanise
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="language" value="ru" checked={language === "ru"} onChange={handleRadio} id="flexRadioDefault1"/>
          <label class="form-check-label" for="flexRadioDefault1">
            Russian
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="language" value="es" checked={language === "es"} onChange={handleRadio} id="flexRadioDefault1"/>
          <label class="form-check-label" for="flexRadioDefault1">
          Spanish
          </label>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={()=>initModal(true)}>
            Close
          </Button>
          <Button variant="success" onClick={()=>{initModal(true); saveValues()}}>
            Save
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
        <div class="form-check">
          <input class="form-check-input" type="radio" name="country" value="in" checked={country === "in"} onChange={handleRadioCoun} id="flexRadioDefault1"/>
          <label class="form-check-label" for="flexRadioDefault1">
          India
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="country" value="us" checked={country === "us"} onChange={handleRadioCoun} id="flexRadioDefault1"/>
          <label class="form-check-label" for="flexRadioDefault1">
          United States
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="country" value="gb" checked={country === "gb"} onChange={handleRadioCoun} id="flexRadioDefault1"/>
          <label class="form-check-label" for="flexRadioDefault1">
          United Kingdom
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="country" value="jp" checked={country === "jp"} onChange={handleRadioCoun} id="flexRadioDefault1"/>
          <label class="form-check-label" for="flexRadioDefault1">
            Japan
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="country" value="pk" checked={country === "pk"} onChange={handleRadioCoun} id="flexRadioDefault1"/>
          <label class="form-check-label" for="flexRadioDefault1">
            Pakistan
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="country" value="ru" checked={country === "ru"} onChange={handleRadioCoun} id="flexRadioDefault1"/>
          <label class="form-check-label" for="flexRadioDefault1">
            Russia
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="country" value="sg" checked={country === "sg"} onChange={handleRadioCoun} id="flexRadioDefault1"/>
          <label class="form-check-label" for="flexRadioDefault1">
            Singapore
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="country" value="ua" checked={country === "ua"} onChange={handleRadioCoun} id="flexRadioDefault1"/>
          <label class="form-check-label" for="flexRadioDefault1">
            Ukrain
          </label>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={()=>initModal2(true)}>
            Close
          </Button>
          <Button variant="success" onClick={()=>{initModal2(true); saveValues()}}>
            Save
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
            <div class="form-check">
              <input class="form-check-input" type="radio" name="topic" value="sports" checked={topic === "sports"} onChange={handleRadioTopic} id="flexRadioDefault1"/>
              <label class="form-check-label" for="flexRadioDefault1">
                Sports
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="topic" value="technology" checked={topic === "technology"} onChange={handleRadioTopic} id="flexRadioDefault1"/>
              <label class="form-check-label" for="flexRadioDefault1">
                Technology
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="topic" value="health" checked={topic === "health"} onChange={handleRadioTopic} id="flexRadioDefault1"/>
              <label class="form-check-label" for="flexRadioDefault1">
                Health
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="topic" value="buisness" checked={topic === "buisness"} onChange={handleRadioTopic} id="flexRadioDefault1"/>
              <label class="form-check-label" for="flexRadioDefault1">
                Buisness
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="topic" value="crime" checked={topic === "crime"} onChange={handleRadioTopic} id="flexRadioDefault1"/>
              <label class="form-check-label" for="flexRadioDefault1">
                Crime
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="topic" value="politics" checked={topic === "politics"} onChange={handleRadioTopic} id="flexRadioDefault1"/>
              <label class="form-check-label" for="flexRadioDefault1">
                Politics
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="topic" value="entertainment" checked={topic === "entertainment"} onChange={handleRadioTopic} id="flexRadioDefault1"/>
              <label class="form-check-label" for="flexRadioDefault1">
                Entertainment
              </label>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={()=>initModal3(true)}>
            Close
          </Button>
           <Button variant="success" onClick={()=>{initModal3(true); saveValues()}}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
{/* ************************************************************************************************* */}


      <h2 style={{color:"white"}}><center>NewsVihar - {topic==="sports"?"Sports":topic==="Crime"?"Crime":topic==="buisness"?"Buisness":topic==="entertainment"?"Entertainment":topic==="health"?"Health":topic==="politics"?"Politics":"General"}</center></h2>
      <div className='row'>
      {
         result.map((elem)=>{
           return <div key={elem.url} className="col-md-4 my-4 card" style={{width: "18rem"}}>
           <img src={!elem.image ? "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg" : elem.image} className="card-img-top" alt="/"/>
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
