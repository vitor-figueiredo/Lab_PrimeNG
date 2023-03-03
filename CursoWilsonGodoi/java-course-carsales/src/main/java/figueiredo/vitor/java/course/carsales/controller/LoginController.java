package figueiredo.vitor.java.course.carsales.controller;

import java.util.Objects;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@CrossOrigin("*")
public class LoginController {
	
	@PostMapping("/api/login")
	@ResponseStatus(code = HttpStatus.ACCEPTED)
	public LoginResponse postLogin(@RequestBody LoginRequest request) {
		
		if (Objects.isNull(request.getPassword()) || Objects.isNull(request.getLogin()) ) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Credenciais do login com problemas");
		}
		
		LoginResponse response = new LoginResponse();
		response.setJwt("afdafasdfasf23423432");
		return response;
	}

}
