import { initServer } from './configs/app.js'
import { config } from 'dotenv'
import { connect } from './configs/mongo.js'
import { defaultCurses, defaultPosts } from './configs/default.js'


config()
connect()
initServer()
defaultCurses()
defaultPosts()