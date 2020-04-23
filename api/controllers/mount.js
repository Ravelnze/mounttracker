const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { queries } = require('../repository/mounts/queries');
const { commands } = require('../repository/mounts/commands');
const { validate } = require('../common/util');

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
 * /mounts/id/{id}:
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
 *          200:
 *              description: Returns a mount object.
 *          204:
 *              description: No matching item found.
 *          422:
 *              description: Invalid input.
 */
router.get('/id/:id', validate([
    check('id').exists().isNumeric()
]), async (req, res, next) => {
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
 *          200:
 *              description: Returns a list of mounts filtered by name.
 *          422:
 *              description: Invalid parameters.
 */
router.get('/name/:name', validate([
    check('name').isString()
]), async (req, res, next) => {
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
 *              $ref: '#/definitions/MountInput'
 *          required: true
 *          description: Name of the Mount to search by
 *      responses:
 *          201:
 *              description: Returns the newly created Mount.
 *          422:
 *              description: Invalid parameters.
 */
router.post('/', validate([
    check('mountName').exists()
]), async (req, res, next) => {
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
 *              $ref: '#/definitions/MountInput'
 *      responses:
 *          200:
 *              description: Returns the number of affected rows.
 *          422:
 *              description: Invalid parameters.
 */
router.put('/:id', validate([
    check('id').exists().isNumeric(),
    check('mountName').exists()
]), async (req, res, next) => {
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
 *          200:
 *              description: Returns the number of affected rows.
 *          204:
 *              description: No object found to delete.
 *          422:
 *              description: Invalid parameters.
 */
router.delete('/:id', validate([
    check('id').exists().isNumeric()
]), async (req, res, next) => {
    await commands.deleteMount(req, res);
});

module.exports = router;