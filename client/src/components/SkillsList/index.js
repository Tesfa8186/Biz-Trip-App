import React from 'react';
import { useMutation } from '@apollo/client';
//import { FaTrash } from 'react-icons/fa';
import { LuTrash } from 'react-icons/lu';

import { REMOVE_SKILL } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';

import './SkillsList.css';  

const SkillsList = ({ skills, isLoggedInUser = false }) => {
  const [removeSkill, { error }] = useMutation(REMOVE_SKILL, {
    update(cache, { data: { removeSkill } }) {
      try {
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: removeSkill },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleRemoveSkill = async (skill) => {
    try {
      const { data } = await removeSkill({
        variables: { skill },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (!skills.length) {
    return <h3>No Skills Yet</h3>;
  }

  return (
    <div>
      <table className="fancyTableSkills">
        <thead>
          <tr>
            <th>Skill</th>
            {isLoggedInUser && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {skills &&
            skills.map((skill) => (
              <tr key={skill}>
                <td className="skillName">{skill}</td>

                {isLoggedInUser && (
                  <td>
                    <button
                      className="btnStyle"
                      onClick={() => handleRemoveSkill(skill)}
                    >
                      <LuTrash />
                    </button>
                  </td>
                )}
              </tr>
            ))}
        </tbody>
      </table>
      {error && (
        <div className="errorStyle">{error.message}</div>
      )}
    </div>
  );
};

export default SkillsList;



/*
import React from 'react';
import { useMutation } from '@apollo/client';

import { REMOVE_SKILL } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';
import '../../utils/fontawesome/css/all.css'
//import '../../utils/fontawesome/css/fontawesome.css';

import './SkillsList.css';  

const SkillsList = ({ skills, isLoggedInUser = false }) => {
  const [removeSkill, { error }] = useMutation(REMOVE_SKILL, {
    update(cache, { data: { removeSkill } }) {
      try {
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: removeSkill },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleRemoveSkill = async (skill) => {
    try {
      const { data } = await removeSkill({
        variables: { skill },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (!skills.length) {
    return <h3>No Skills Yet</h3>;
  }

  return (
    <div>
      <table className="fancyTableSkills">
        <thead>
          <tr>
            <th>Skill</th>
            {isLoggedInUser && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {skills &&
            skills.map((skill) => (
              <tr key={skill}>
                <td className="skillName">{skill}</td>

                {isLoggedInUser && (
                  <td>
                    <i
                      className="fa fa-trash btnStyle"
                      onClick={() => handleRemoveSkill(skill)}
                      aria-hidden="true"
                    ></i>
                  </td>
                )}
              </tr>
            ))}
        </tbody>
      </table>
      {error && (
        <div className="errorStyle">{error.message}</div>
      )}
    </div>
  );
};

export default SkillsList;
*/