import React, { useState } from "react";
import DatePicker from "react-native-datepicker";
import * as ImagePicker from "expo-image-picker";

import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from "react-native";

const User = ({ route, navigation }) => {
  const { user } = route.params;

  const [name, setName] = useState(user.name);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [address, setAddress] = useState(user.address);
  const [dateOfBirth, setDateOfBirth] = useState(user.dateOfBirth);
  const [selectedImage, setSelectedImage] = useState(user.avatar);
  const [errorMessages, setErrorMessages] = useState([]);

  const updateStudent = (studentId, updatedData) => {
    fetch(
      `https://6475a8c5e607ba4797dc4582.mockapi.io/student/Student/${studentId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Update success:", data);
      })
      .catch((error) => {
        console.error("Update error:", error);
      });
  };

  const handleSelectImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access the media library is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };

  const handleSubmit = async () => {
    let errors = [];

    // Kiểm tra tất cả các trường không rỗng
    if (name === "") {
      errors.push("Vui lòng nhập tên.");
    }

    if (phoneNumber === "") {
      errors.push("Vui lòng nhập số điện thoại.");
    }

    if (address === "") {
      errors.push("Vui lòng nhập địa chỉ.");
    }

    if (dateOfBirth === "") {
      errors.push("Vui lòng chọn ngày sinh.");
    }

    if (selectedImage === "") {
      errors.push("Vui lòng chọn ảnh đại diện.");
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      errors.push("Số điện thoại không đúng định dạng.");
    }

    const dateRegex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
    if (!dateRegex.test(dateOfBirth)) {
      errors.push("Ngày sinh phải đúng dạng dd/mm/yyyy.");
    }

    if (errors.length > 0) {
      setErrorMessages(errors);
      return;
    }

    const updatedData = {
      name: name,
      phoneNumber: phoneNumber,
      address: address,
      dateOfBirth: dateOfBirth,
      // avatar: selectedImage,
    };

    try {
      await updateStudent(user.id, updatedData);
      alert("Cập nhật thành công cần tài khoản admin để xem");
      navigation.navigate("Đăng nhập");
    } catch (error) {
      console.error("Update error:", error);
      // Xử lý khi gặp lỗi
    }
  };

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.imageContainer} onPress={handleSelectImage}>
        {selectedImage ? (
          <Image source={{ uri: selectedImage }} style={styles.image} />
        ) : (
          <Text style={styles.imagePlaceholder}>Select Image</Text>
        )}
      </TouchableOpacity> */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      {errorMessages.includes("Vui lòng nhập tên.") && (
        <Text style={styles.errorMessage}>Vui lòng nhập tên.</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      {/* {errorMessages.includes("Vui lòng nhập số điện thoại.") && (
        <Text style={styles.errorMessage}>Vui lòng nhập số điện thoại.</Text>
      )}
      {errorMessages.includes("Số điện thoại không đúng định dạng.") && (
        <Text style={styles.errorMessage}>Số điện thoại không đúng định dạng.</Text>
      )} */}
      {phoneNumber === "" &&
        errorMessages.includes("Vui lòng nhập số điện thoại.") && (
          <Text style={styles.errorMessage}>Vui lòng nhập số điện thoại.</Text>
        )}
      {
      !phoneNumber === "" &&
        errorMessages.includes("Số điện thoại không đúng định dạng.") && (
          <Text style={styles.errorMessage}>
            Số điện thoại không đúng định dạng.
          </Text>
        )}

      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      {errorMessages.includes("Vui lòng nhập địa chỉ.") && (
        <Text style={styles.errorMessage}>Vui lòng nhập địa chỉ.</Text>
      )}
      <DatePicker
        style={styles.datePickerButton}
        date={dateOfBirth}
        mode="date"
        placeholder="Select Birthdate"
        format="DD/MM/YYYY"
        minDate="01/01/1900"
        maxDate="01/01/2100"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: "absolute",
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 36,
          },
        }}
        onDateChange={(date) => setDateOfBirth(date)}
      />
      {errorMessages.includes("Vui lòng chọn ngày sinh.") && (
        <Text style={styles.errorMessage}>Vui lòng chọn ngày sinh.</Text>
      )}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Lưu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f2f2f2",
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 1,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  imagePlaceholder: {
    fontSize: 16,
    color: "gray",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  errorMessage: {
    color: "red",
    marginBottom: 8,
    textAlign: "left",
  },
  datePickerButton: {
    width: "100%",
    height: 40,
    backgroundColor: "#ffff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    marginBottom: 16,
  },
  submitButton: {
    width: "100%",
    height: 40,
    backgroundColor: "#ff6600",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  submitButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default User;
