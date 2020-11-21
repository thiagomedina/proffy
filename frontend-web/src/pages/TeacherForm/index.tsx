import React, { useState, useRef, FormEvent, useCallback } from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";
import getValidationErrors from "../../utils/getValidationsErros";

import { useAuth } from "../../hooks/auth";

import warningIcon from "../../assets/images/icons/warning.svg";
import { FiMinusCircle } from "react-icons/fi";
import { Profile, Avatar } from "./style";

import "./styles.css";


interface IClass{
  whatsapp: string;
  bio: string;
  level: string;
  cost: string;
  schedule: [string]


}
function TeacherForm() {
  const formRef = useRef<FormHandles>(null);
  const { user } = useAuth();

  const history = useHistory();
  const [profile, setProfile] = useState(user);
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bio, setBio] = useState("");

  const [subject, setSubject] = useState("");
  const [cost, setCost] = useState("");

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: "", to: "" },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: "", to: "" }]);
  }
  const handleDeleteSchedule = useCallback((index) => {
    const result = scheduleItems.filter((e, i) => i != index);
    setScheduleItems(result);
  }, []);

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();
    console.log(e);

    // api
    //   .post("classes", {
    //     avatar,
    //     whatsapp,
    //     bio,
    //     subject,
    //     cost: Number(cost),
    //     schedule: scheduleItems,
    //   })
    //   .then(() => {
    //     alert("Cadastro realizado com sucesso!");

    //     history.push("/");
    //   })
    //   .catch(() => {
    //     alert("Erro no cadastro!");
    //   });
  }

  const handleCreateClasses = useCallback( async() => {

  }, []);
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        to="/study"
        title="Create your schedule."
        description="First you need to fill the form"
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>About you</legend>
            <Profile>
              <Avatar>
                <img src="https://via.placeholder.com/150" alt="" />
                <span>{user.name}</span>
              </Avatar>

              <Input
                name="whatsapp"
                label="Whatsapp"
                placeholder="(   ) _  _ _ _ _   _ _ _ _ "
                value={whatsapp}
                onChange={(e) => {
                  setWhatsapp(e.target.value);
                }}
              />
            </Profile>

            <Textarea
              name="bio"
              label="Bio"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>English level</legend>

            <Select
              name="level"
              label="Level"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              options={[
                { value: "A1", label: "A1" },
                { value: "A2", label: "A2" },
                { value: "B1", label: "B1" },
                { value: "B2", label: "B2" },
                { value: "C1", label: "C1" },
                { value: "C2", label: "C2" },
              ]}
            />
            <Input
              name="cost"
              label="Price"
              value={cost}
              onChange={(e) => {
                setCost(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>
              Available times
              <button type="button" onClick={addNewScheduleItem}>
                + New Time
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Week Day"
                    value={scheduleItem.week_day}
                    onChange={(e) =>
                      setScheduleItemValue(index, "week_day", e.target.value)
                    }
                    options={[
                      { value: "0", label: "Sunday" },
                      { value: "1", label: "Monday" },
                      { value: "2", label: "Tuesday" },
                      { value: "3", label: "Wednesday" },
                      { value: "4", label: "Thursday" },
                      { value: "5", label: "Friday" },
                      { value: "6", label: "Saturday" },
                    ]}
                  />
                  <Input
                    name="from"
                    label="From"
                    type="time"
                    value={scheduleItem.from}
                    onChange={(e) =>
                      setScheduleItemValue(index, "from", e.target.value)
                    }
                  />
                  <Input
                    name="to"
                    label="To"
                    type="time"
                    value={scheduleItem.to}
                    onChange={(e) =>
                      setScheduleItemValue(index, "to", e.target.value)
                    }
                  />
                  {index === 0 ? null : (
                    <button
                      type="button"
                      onClick={() => handleDeleteSchedule(index)}
                      className="delete-schedule"
                    >
                      <FiMinusCircle />
                    </button>
                  )}
                </div>
              );
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Important! <br />
              Fill in all fields
            </p>

            <button type="submit">Save</button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default TeacherForm;
