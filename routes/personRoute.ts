import { Router } from "express";
import { addMySelf, getList, addDate, listActive, sortByPropertie, findNoActive, resetData } from "../controllers/personController";


const router = Router();


/**
 * @swagger
 * /api/person:
 *   get:
 *     summary: List all people.
 *     description: Returns a list of all items.
 *     responses:
 *       200:
 *         description: Success. Returns the list of items.
 *       500:
 *         description: Internal server error.
 */
router.get('/', getList);
/**
 * @swagger
 * /api/person/add-myself:
 *   post:
 *     summary: Add a new person.
 *     description: Adds a new person to the list with the provided information.
 *     parameters:
 *       - in: body
 *         name: person
 *         description: The person to be added.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             Name:
 *               type: string
 *             FavoriteFood:
 *               type: string
 *             FavoriteMovie:
 *               type: string
 *             Status:
 *               type: string
 *     responses:
 *       201:
 *         description: Person successfully added.
 *       409:
 *         description: Conflict, person with this name already exists.
 *       500:
 *         description: An unexpected error occurred.
 */
router.post('/add-myself', addMySelf);
/**
 * @swagger
 * /api/person/add-date:
 *   post:
 *     summary: Add a date to each person.
 *     responses:
 *       200:
 *         description: Date successfully added.
 *       500:
 *         description: An unexpected error occurred.
 */
router.post('/add-date', addDate);
/**
 * @swagger
 * /api/person/active:
 *   get:
 *     summary: Get active people.
 *     description: Returns a list of people with active status.
 *     responses:
 *       200:
 *         description: Success. Returns the list of active people.
 *       500:
 *         description: Internal server error.
 */
router.get('/active', listActive);
/**
 * @swagger
 * /api/person/sort-propertie:
 *   get:
 *     summary: Sort people by a specific property.
 *     description: Sorts the list of people based on the provided property.
 *     parameters:
 *       - in: query
 *         name: property
 *         description: The property to sort by (e.g., Name, Favorite Food, Favorite Movie, Status, Date).
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success. Returns the sorted list.
 *       400:
 *         description: Bad request, invalid property.
 *       500:
 *         description: Internal server error.
 */
router.get('/sort-propertie', sortByPropertie);
/**
 * @swagger
 * /api/person/no-active:
 *   get:
 *     summary: Get people who are not active.
 *     description: Returns a list of people with non-active status.
 *     responses:
 *       200:
 *         description: Success. Returns the list of non-active people.
 */
router.get('/no-active', findNoActive);
/**
 * @swagger
 * /api/person/reset:
 *   put:
 *     summary: Reset data.
 *     description: Resets all data related to people, effectively clearing the list and adding the main people.
 *     responses:
 *       200:
 *         description: Success. All data has been reset.
 *       500:
 *         description: Internal server error.
 */
router.put('/reset', resetData);

export default router;