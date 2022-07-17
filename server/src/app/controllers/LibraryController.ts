import { Request, Response } from "express";
import LibraryService from "../services/LibraryService";

class LibraryController {
  async index(request: Request, response: Response) {
    try {
      const userId = request.user.id

      const libraryService = await LibraryService.index(Number(userId))

      return response.status(201).json(libraryService)
    } catch (error) {
      return response.status(400).json({ error })
    }
  }

  async getGender(request: Request, response: Response) {
    try {
      const { productId } = request.params

      const libraryService = await LibraryService.indexGenders(Number(productId))

      return response.status(201).json(libraryService)
    } catch (error) {
      return response.status(400).json({ error })
    }
  }
}

export default new LibraryController