import React, { FormEvent } from "react"
import { useState } from "react"
import FormControl from '@mui/material/FormControl';


const CardForm = () => {
  
  const [name, setName] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [subtitle, setSubtitle] = useState<string>("")
  const [files, setFiles] = useState<File[]>([])
  const [footer, setFooter] = useState<string>("")

  type Card = {
    id: string
    name: string
    description: string
    subtitle: string
    files: File[]
    footer: string
  }

  const handleSubmit = async (event: FormEvent) => {

    event.preventDefault()

    let uuid = self.crypto.randomUUID()

    if(name && description && subtitle && files && footer) {

        let card: Card  = {
            id: uuid, 
            name: name, 
            description: description,
            subtitle: subtitle,
            files: files, 
            footer: footer
        }

        try{
          
          setName('')
          setDescription('')
          setSubtitle('')
          setFiles([])
          setFooter('')

        }catch {
          new Error('could not create the new company')
        }
    }else {
        return new Error('Either the name or description was not provided')
    }
  }


  const handleChange = (event) =>  {
    console.log(event)
  }

  return (
    <form onSubmit={handleSubmit}>
        <FormControl>
        <label htmlFor="companyName">Header:</label>
        <input
            id="projectName"
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
        />
        <label htmlFor="companyDescription">Subheader</label>
        <input
            id="projectSubtitle"
            type="text"
            onChange={(e) => setSubtitle(e.target.value)}
            value={subtitle}
        />
        <label htmlFor="companyLocation">BodyText</label>
        <input
            id="projectDescription"
            type="text"
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
        />
        <label htmlFor="companyLocation">FooterText</label>
        <input
            id="projectFooterText"
            type="text"
            onChange={(e) => setFooter(e.target.value)}
            value={footer}
        />
        <label htmlFor="">Project Files</label>
          <input
            id="" 
            name="avatar" 
            accept="image/png, image/jpeg, image/gif "
            type="file"
            onChange={(e) => handleChange(e)}
        />
        <button type="submit">Submit</button>
        </FormControl>
    </form>
  )
}

export default CardForm