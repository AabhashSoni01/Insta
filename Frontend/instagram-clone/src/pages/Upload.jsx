import "./App.css";
import "./index.css";
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

function Upload() {

  const [imgUrl, setImgUrl] = useState('')
  const [fileName, setFileName] = useState('')

  const handleChange = async (e) => {
    const file = e.target.files[0]
    setFileName(file.name)

    const { data, error } = await supabase
      .storage
      .from('images')
      .upload(file.name, file)

    if (error) {
      console.log('Upload error:', error.message)
    } else {
      console.log('Uploaded:', data)
    }
  }

  const save = async () => {
    const { data, error } = await supabase
      .storage
      .from('images')
      .getPublicUrl(fileName)

    if (error) {
      console.log('URL error:', error.message)
    } else {
      console.log('Public URL:', data.publicUrl)
      setImgUrl(data.publicUrl)
    }
  }

  return (
    <>
      <input type="file" onChange={handleChange} />
      <button onClick={save}>Save</button>
      {imgUrl && <img src={imgUrl} alt="Uploaded" style={{width:"200px"}} />}
    </>
  )
}

export default Upload;