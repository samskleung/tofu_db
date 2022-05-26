import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CreateForm.scss";

export default function CreateForm({ createNewApplication }) {
  const [value, setValue] = useState();
  const disabled = value === undefined || value === "" ? "disabled" : "active";
  return (
    <div className="createAppForm">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>App Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter App Name"
            onChange={(e) => setValue(e.target.value)}
          />
        </Form.Group>
        <div className="createcancel">
          <div className="cancelButtonDiv">

            <Link
              className="cancelbutton"
              to="/"
              style={{ textDecoration: "none" }}
            ><Button variant="danger" type="submit">
                Cancel
              </Button>
            </Link>
          </div>
          <div className="CreateButtonDiv">
            {disabled === "disabled" &&
              <Button
                variant="secondary"
                type="button"
                disabled
              > Create
              </Button>
            }
            {disabled === "active" &&
              <Link
                className="cancelbutton"
                to="/"
                style={{ textDecoration: "none" }}
              >
                <Button
                variant="primary"
                type="button"
                // onClick={(event) => createNewApplication(event.target.value)}
                onClick={() => createNewApplication(value)}
              >
                  Create
                </Button>
              </Link>
            }
          </div>
        </div>
      </Form>

    </div>
  );
}
