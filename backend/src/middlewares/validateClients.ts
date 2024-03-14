import { Response, Request, NextFunction } from "express";
import { Status } from "../Status";

export const bodyClient = (req: Request, res: Response, next: NextFunction) => {
  const { nome, email, telefone, cpf, status } = req.body;
  if (!status || !nome || !email || !telefone || !cpf) {
    return res.status(Status.BedRequest).json({ error: 'Invalid dataset'});
  } else if (status.length === 0 || nome.length === 0 || email.length === 0 || telefone.length === 0 || cpf.length === 0) {
    return res.status(Status.BedRequest).json({ error: 'Data is required' });
  } else {
    next();
  }
};

export const paramsClientId = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (!id) return res.status(Status.BedRequest).json({ error: 'Id required'});
  next();
};

export const bodyClientStatus = (req: Request, res: Response, next: NextFunction) => {
  const { status } = req.body;
  if (!status ) return res.status(Status.BedRequest).json({ error: 'Status required'});
  next();
};