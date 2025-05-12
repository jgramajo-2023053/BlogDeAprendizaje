import Curse from '../src/curse/curse.model.js'
import { Types } from 'mongoose'
import Post from '../src/post/post.model.js'

export const defaultCurses = async () => {
    try {
        const curses = [
            { 
                _id: new Types.ObjectId("65a123456789abcdef123450"),
                name: "Tecnología",
                professor: "Josue Noj", 
                description: "Parte teoria de programación" 
            },
            { 
                _id: new Types.ObjectId("65a123456789abcdef123451"), 
                name: "Practica Supervisada",
                professor: "Josue Noj",  
                description: "Tareas orientadas a un ambito profecional" 
            },
            { 
                _id: new Types.ObjectId("65a123456789abcdef123452"), 
                name: "Taller", 
                professor: "Josue Noj", 
                description: "Parte practica de la programacion" 
            }
        ];

        for (let cur of curses) {
            let existingCur = await Curse.findOne({ _id: cur._id })
            if (existingCur) return

            let newCurse = new Curse(cur)
            await newCurse.save();
        }
    } catch (err) {
        console.error("Error initializing curses:", err)
    }
}

export const defaultPosts = async () => {
    try {
      const posts = [
        {
          title: "Fundamentos de programación",
          curse: new Types.ObjectId("65a123456789abcdef123450"),
          text: "Realiza una infografía que explique qué son las variables, los tipos de datos y las estructuras de control (if, for, while)."
        },
        {
          title: "Programación Orientada a Objetos",
          curse: new Types.ObjectId("65a123456789abcdef123450"),
          text: "Investiga los conceptos de clases, objetos, herencia y polimorfismo. Presenta un ejemplo visual con UML y explica cada parte."
        },
        {
          title: "Informe de prácticas iniciales",
          curse: new Types.ObjectId("65a123456789abcdef123451"),
          text: "Redacta un informe detallado con las tareas realizadas durante la primera semana de práctica, incluyendo fechas y responsables."
        },
        {
          title: "Bitácora de actividades semana 1",
          curse: new Types.ObjectId("65a123456789abcdef123451"),
          text: "Elabora una bitácora que describa tu actividad diaria dentro del entorno profesional. Incluye horas, tareas y aprendizajes."
        },
        {
          title: "Diseño de interfaces",
          curse: new Types.ObjectId("65a123456789abcdef123452"),
          text: "Crea un esquema visual de una interfaz de usuario para una app educativa. Debes justificar el uso de colores, tipografía y distribución."
        },
        {
          title: "Proyecto: ToDo App",
          curse: new Types.ObjectId("65a123456789abcdef123452"),
          text: "Desarrolla una aplicación simple para crear tareas (ToDo List). Debe permitir agregar, eliminar y marcar tareas como completadas."
        }
      ]
  
      for (let post of posts) {
        const exists = await Post.findOne({ title: post.title })
        if (exists) continue
  
        const newPost = new Post(post)
        await newPost.save()
      }
  
      console.log("Default posts loaded.")
    } catch (err) {
      console.error("Error initializing posts:", err)
    }
}