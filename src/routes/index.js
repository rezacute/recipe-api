const recipeController = require('../controllers/recipe')

module.exports = (express) => {
  const router = express.Router()

  router.get('/', recipeController.index)

  return router
}