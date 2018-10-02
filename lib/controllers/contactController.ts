import mongoose from "mongoose";
import { ContactSchema } from "../models/contactModel";
import { Request, Response } from "express";
import _ from "lodash";

const Contact = mongoose.model("Contact", ContactSchema);

export class ContactController {
  public get_all(req: Request, res: Response) {
    Contact.find(
      {
        firstName: { $regex: `.*${req.query.firstName || ""}.*` },
        lastName: { $regex: `.*${req.query.lastName || ""}.*` }
      },
      (err, result) => {
        if (err) {
          res.status(400).send(err);
        }

        res.json(result);
      }
    );
  }

  public get_by_id(req: Request, res: Response) {
    Contact.findById(req.params.id, (err, result) => {
      if (err) {
        res.status(400).send(err);
      }

      res.json(result);
    });
  }

  public create(req: Request, res: Response) {
    let newContact = new Contact(req.body);

    newContact.save((err, result) => {
      if (err) {
        res.status(400).send(err);
      }

      res.json(result);
    });
  }

  public update(req: Request, res: Response) {
    Contact.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true },
      (err, result) => {
        if (err) {
          res.status(400).send(err);
        }

        res.json(result);
      }
    );
  }

  public delete(req: Request, res: Response) {
    Contact.remove({ _id: req.params.id }, err => {
      if (err) {
        res.status(400).send(err);
      }

      res.json({ message: "Successfully deleted contact!" });
    });
  }
}
