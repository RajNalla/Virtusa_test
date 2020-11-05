import { Request, Response, NextFunction } from "express";

export async function sendSuccessResponse(
  req: Request,
  res: Response,
  { status, data }
) {
  return res.status(status).send({ data });
}

export async function sendErrorResponse(
  req: Request,
  res: Response,
  { status, error }
) {
  return res.status(status).send({ error });
}
