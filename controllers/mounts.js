const express = require('express');
const router = express.Router();
const queries = require('../repository/mounts/queries');
const commands = require('../repository/mounts/commands');

/**
 * @swagger
 * /mounts:
 *    get:
 *      tags:
 *          - Mounts
 *      summary: List all mounts.
 *      consumes:
 *        - application/json
 *      responses:
 *        200:
 *          description: Returns list of mounts.
 *        204:
 *          description: No matching item found.
 */
router.get('/', async (req, res, next) => {
    await queries.getAllMounts(res);
});

/**
 * @swagger
 * /mounts/{id}:
 *    get:
 *      tags:
 *          - Mounts
 *      summary: Get a mount by Id.
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          type: integer
 *          required: true
 *          description: Id of the Mount
 *      responses:
 *        200:
 *          description: Returns a mount object.
 *        204:
 *          description: No matching item found.
 */
router.get('/:id', async (req, res, next) => {
    await queries.getMountById(req, res);
});

/**
 * @swagger
 * /mounts/name/{name}:
 *    get:
 *      tags:
 *          - Mounts
 *      summary: Search mounts by name.
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: name
 *          type: string
 *          required: true
 *          description: Name of the Mount to search by
 *      responses:
 *        200:
 *          description: Returns a list mounts filtered by name.
 */
router.get('/name/:name', async (req, res, next) => {
    await queries.getMountsByName(req, res);
});

/**
 * @swagger
 * /mounts:
 *    post:
 *      tags:
 *          - Mounts
 *      summary: Search mounts by name.
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: body
 *          name: mount
 *          schema: 
 *              type: object
 *              properties:
 *                  mountName:
 *                      type: string
 *          required: true
 *          description: Name of the Mount to search by
 *      responses:
 *        200:
 *          description: Returns a list mounts filtered by name.
 */
router.post('/', async (req, res, next) => {
    await commands.createMount(req, res);
});

/**
 * @swagger
 * /mounts/{id}:
 *    put:
 *      tags:
 *          - Mounts
 *      summary: Update a mount by Id.
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          type: integer
 *          required: true
 *          description: Id of the Mount to update
 *        - in: body
 *          name: mount
 *          schema: 
 *              type: object
 *              properties:
 *                  mountName:
 *                      type: string
 *      responses:
 *        200:
 *          description: Returns a mount object.
 *        204:
 *          description: No matching item found.
 */
router.put('/:id', async (req, res, next) => {
    await commands.updateMount(req, res);
});

/**
 * @swagger
 * /mounts/{id}:
 *    delete:
 *      tags:
 *          - Mounts
 *      summary: Deletes a mount by Id.
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          type: integer
 *          required: true
 *          description: Id of the Mount to delete
 *      responses:
 *        200:
 *          description: Returns a mount object.
 *        204:
 *          description: No matching item found.
 */
router.delete('/:id', async (req, res, next) => {
    await commands.deleteMount(req, res);
});

module.exports = router;
