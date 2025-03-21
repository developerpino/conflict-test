# 프로젝트 설명

이 프로젝트는 각 기능(feature) 브랜치에서 작업한 내용을 `main` 브랜치로 병합하여 최종본을 완성하는 과정을 다룹니다. 또한, GitHub Pages를 활용하여 결과물을 웹 페이지로 배포합니다.

## 초기 로컬 브런치 세팅

```
git fetch --all

for branch in $(git branch -r | grep -v '\->'); do
  git branch --track ${branch#origin/} $branch
done

git branch
```

## 작업 흐름

1. **각 기능 브랜치 확인**:
   - 프로젝트의 각 `feat` 브랜치에서 작업한 내용을 확인합니다.
   - 필요한 경우 해당 브랜치에서 `git pull`을 사용하여 최신 내용을 가져옵니다.

2. **`main` 브랜치로 병합**:
   - 작업이 완료된 후, 각 기능 브랜치를 `main` 브랜치로 병합하여 최종본을 만듭니다.
   - 병합 순서는 각 브랜치의 기능에 맞게 진행합니다.
   
3. **본인 GitHub 리포지토리 만들기**:
   - GitHub에서 새로운 리포지토리를 생성합니다.
   - `git remote add origin <URL>` 명령어를 통해 이 리포지토리를 원격 저장소로 추가합니다.

4. **GitHub Pages 활용**:
   - GitHub Pages를 사용하여 프로젝트를 웹 페이지로 배포할 수 있습니다.

## Git 명령어 사용 예시

1. **새 원격 저장소 추가**:
   
   git remote add origin <GitHub 리포지토리 URL>
