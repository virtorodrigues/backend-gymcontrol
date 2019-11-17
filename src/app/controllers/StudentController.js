import * as Yup from 'yup';

import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      years: Yup.number()
        .integer()
        .required(),
      height: Yup.number().required(),
      weight: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation is fails' });
    }

    const student = await Student.findOne({ where: { email: req.body.email } });

    if (student) {
      return res.status(400).json({ error: 'Student already exists' });
    }

    const { id, name, email, years, weight, height } = await Student.create(
      req.body
    );

    return res.json({
      id,
      name,
      email,
      years,
      weight,
      height,
    });
  }

  async update(req, res) {
    return res.json({ ok: 'update' });
  }
}

export default new StudentController();
