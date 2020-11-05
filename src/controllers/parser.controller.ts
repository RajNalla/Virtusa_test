import { Request, Response, NextFunction } from "express";
import {
  sendErrorResponse,
  sendSuccessResponse,
} from "../utils/request.handler";
import * as parserService from "../services/parser.service";
export async function v1Parser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data = await parserService.v1Parser(req.body);
    return sendSuccessResponse(req, res, { status: 200, data });
  } catch (err) {
    return sendErrorResponse(req, res, { status: 500, error: err.message });
  }
}

export async function v2Parser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data = await parserService.v2Parser(req.body);
    return sendSuccessResponse(req, res, { status: 200, data });
  } catch (err) {
    return sendErrorResponse(req, res, { status: 500, error: err.message });
  }
}
