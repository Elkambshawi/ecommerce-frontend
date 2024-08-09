import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from '@routes/mainRoutes';
import '@styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppRouter />
)
