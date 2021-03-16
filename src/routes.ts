import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCouse (req: Request, res: Response) {
  CreateCourseService.execute({
    name: "NodeJs",
    duration: 10,
    educator: "Guilherme"
  })

  return res.send();
}
