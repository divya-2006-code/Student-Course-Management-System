import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

import api from "../services/api";

const CourseContext = createContext();

export function CourseProvider({ children }) {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

const fetchCourses = async () => {
  try {
    setLoading(true);

   const response = await api.get("/courses");

    setCourses(response.data.data);
    setError("");
  } catch (error) {
    console.error(error);
    setError("Unable to load courses.");
  } finally {
    setLoading(false);
  }
};

 
const addCourse = async (course) => {
  try {
   const response = await api.post("/courses", course);
    const newCourse = response.data.data;

    setCourses((previousCourses) => [
      ...previousCourses,
      newCourse
    ]);

    return newCourse;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const updateCourse = async (id, course) => {
  try {
    const response = await api.put(
     `/courses/${id}`,
      course
    );

    const updatedCourse = response.data.data;

    setCourses((previousCourses) =>
      previousCourses.map((item) =>
        String(item.id) === String(id)
          ? updatedCourse
          : item
      )
    );

    return updatedCourse;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const deleteCourse = async (id) => {
  try {
    await api.delete(`/courses/${id}`);

    setCourses((previousCourses) =>
      previousCourses.filter(
        (item) => String(item.id) !== String(id)
      )
    );
  } catch (error) {
    console.error(error);
    throw error;
  }
};



  useEffect(() => {
    const timeoutId = setTimeout(() => {
      void fetchCourses();
    }, 0);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <CourseContext.Provider
      value={{
        courses,
        loading,
        error,
        fetchCourses,
        addCourse,
        updateCourse,
        deleteCourse
      }}
    >
      {children}
    </CourseContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCourses() {
  return useContext(CourseContext);
}