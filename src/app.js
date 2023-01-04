import  express  from "express";
import employeesRoute from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'


const app = express()
app.use(express.json())

app.use('/api',employeesRoute)
app.use(indexRoutes)
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Page not found'
    })
})

export default app